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

//register
app.post('/api/register', async (req, res) => {
    try {
      const saltRounds = 10;  
      const {name,  email, password} = req.body;
      
      
  
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const user = {
        name,
        email,
        password: hashedPassword
      };
  
      const query = `INSERT INTO admin (name, email, password) VALUES ( ?, ?, ?)`;
      db.query(query, [user.name, user.email, user.password], (error, results) => {
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
  
    const query = 'SELECT * FROM admin WHERE email = ?';
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
        return res.status(200).json({ message: 'Logged in successfully', token });
      } else {
        return res.status(400).json({ message: 'User not found' });
      }
    });
  });
//get user
  app.get('/user',(req,res)=>{
    const sqlSelect="SELECT * FROM user"
    db.query(sqlSelect, (err, result)=>{
        console.log('erreur',err)
        console.log('result',result)
        res.json(result)
    })
  
  })

  //create user
  app.post('/createUser', (req, res) => {
    const user  = req.body;
    console.log("creating user", user); 
    db.query(
      `INSERT INTO user (name,position, email,password,admin_idadmin) VALUES (?, ?, ?,?,?)`,
      [user.name, user.position , user.email,user.password, user.admin_idadmin],
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

 //see courses
app.get('/cour', (req, res) => {
  // Retrieve courses data from the database
  const sqlSelect = 'SELECT * FROM courses';
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.error('Error fetching courses:', err);
      res.status(500).send('Error fetching courses');
    } else {
      res.json(result);
    }
  });
});


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
//delete user
app.delete('/deleteUser/:name', (req, res) => {
  const name = req.params.name;
  
  
  db.query('DELETE FROM courses WHERE user_iduser IN (SELECT iduser FROM user WHERE name = ?)', name, (err, result) => {
    if (err) {
      console.error('Error deleting referencing rows:', err);
      res.status(500).send(`Error deleting referencing rows: ${err.message}`);
    } else {
      db.query('DELETE FROM user WHERE name = ?', name, (err, result) => {
        if (err) {
          console.error('Error deleting user:', err);
          res.status(500).send(`Error deleting user: ${err.message}`);
        } else if (result.affectedRows === 0) {
          console.log(`User with name ${name} not found`);
          res.status(404).send(`User with name ${name} not found`);
        } else {
          console.log(`User with name ${name} deleted successfully`);
          res.send(`User with name ${name} deleted successfully`);
        }
      });
    }
  });
});



app.listen(8000,()=>{
    console.log('here we go')
})