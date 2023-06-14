const express=require('express')
const cors=require('cors')
const app=express() 
const mysql=require('mysql2')
var bodyParser = require('body-parser')
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken') 
const saltRounds = 10; 
app.use(express.json()); 
app.use(bodyParser.json())



const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'base'
})

db.connect((err)=>{
    if(err){
        console.log(err)
    } else{
    console.log('connected')}
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//create an admin

app.post('/createAdmin', async (req,res)=>{
    
  const post =  req.body;
  console.log("creating admin", post);

  
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(post.password, salt);

  const query = `INSERT INTO admin (name,email, password) VALUES (?, ?, ?)`;

  db.query(query, [post.name, post.email, hashedPassword],
  (error,  results) => {
      if (error) {
          console.log(error);
          res.status(500).json({ status: 'error' });
      } else {
          res.json(results);
      }
  });
});

//logout


const blacklist = [];

app.post('/api/logout', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Token required' });
  }

  if (blacklist.includes(token)) {
    return res.status(400).json({ error: 'Token already blacklisted' });
  }

  blacklist.push(token);

  return res.status(200).json({ message: 'Logged out successfully' });
});



//create user

app.post('/create', async (req,res)=>{
    
    const post =  req.body;
    console.log("creating user", post);

    
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(post.password, saltRounds);
    
    const query = `INSERT INTO user (name, position, email, admin_idadmin, password) VALUES (?, ?, ?, ?, ?)`;
    
    db.query(query, [post.name, post.position, post.email, post.admin_idadmin, hashedPassword], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ status: 'error' });
        } else {
            res.json(results);
        }
    });
});
;

//get courses

app.get('/cour',(req,res)=>{
    const sqlSelect="SELECT * FROM courses"
    db.query(sqlSelect, (err, result)=>{
        console.log('erreur',err)
        console.log('result',result)
        res.json(result)
    })

})

//createCourse
app.post('/createCourse', (req, res) => {
  const course  = req.body;
  console.log("creating course", course); 
  db.query(
    `INSERT INTO courses (name,hour, subjct,user_iduser) VALUES (?, ?, ?,?)`,
    [course.name, course.hour , course.subjct, course.user_iduser],
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send(error.message);
      } else {
        res.status(200).send(results);
      }
    }
  );
});
//delete course
app.delete('/courseDelete/:name', (req, res) => {
  const name = req.params.name;
  db.query('DELETE FROM courses WHERE name = ?', name, (err, result) => {
    if (err) {
      console.error('Error deleting course:', err);
      res.status(500).send(`Error deleting course: ${err.message}`);
    } else if (result.affectedRows === 0) {
      console.log(`Course with name ${name} not found`);
      res.status(404).send(`Course with name ${name} not found`);
    } else {
      console.log(`Course with name ${name} deleted successfully`);
      res.send(`Course with name ${name} deleted successfully`);
    }
  });
});


//get users
app.get('/users',(req,res)=>{
  const sqlSelect="SELECT * FROM user"
  db.query(sqlSelect, (err, result)=>{
      console.log('erreur',err)
      console.log('result',result)
      res.json(result)
  })

})

//get one user

app.get('/one/:name', (req, res) => {
  const recordName = req.params.name;
  const query = 'SELECT * FROM user WHERE name = ?';

  db.query(query, [recordName], (error, results) => {
    if (error) { 
      console.error('Error retrieving record:', error);
      res.status(500).json({ error: 'Failed to retrieve record' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: 'Record not found' });
      } else {
        res.status(200).json(results[0]);
      }
    }
  });
});

//register

app.post('/api/register', async (req, res) => {
  try {
    const saltRounds = 10;  
    const {name, position, email, admin_idadmin, password} = req.body;
    
    

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = {
      name,
      position,
      email,
      admin_idadmin,
      password: hashedPassword
    };

    const query = `INSERT INTO user (name, position, email, admin_idadmin, password) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [user.name, user.position, user.email, user.admin_idadmin, user.password], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Server error' });
      } else {
        res.status(200).json({ status: 'success', message: 'User created successfully!' });
      }
    });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
});

//login

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
  
    const query = 'SELECT * FROM user WHERE email = ?';
    db.query(query, email, async (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
  
      if (results.length > 0) {
        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }
  
        const token = jwt.sign({ id: user.id }, 'your_secret_jwt_key', { expiresIn: '1h' });
        return res.status(200).json({ message: 'Logged in successfully', token, user });
      } else {
        return res.status(400).json({ message: 'User not found' });
      }
    });
  });



app.listen(6000,()=>{
    console.log('here we go')
})