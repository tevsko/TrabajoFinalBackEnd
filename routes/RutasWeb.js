const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
    res.render('index', {titulo: 'Caballeros dinamicos'})
})

router.get("/ver", (req, res) => {
    res.render("caballeros", { titulo: "Lista de Caballeros" });
  });


module.exports = router;