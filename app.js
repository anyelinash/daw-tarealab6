const express = require('express'); 
const app = express();

app.use(express.static('public'));

// Configurar el motor de plantillas 
app.set('view engine', 'pug'); 
app.set('views', './views');

// Ruta para mostrar el portafolio personal
app.get('/Portafolio/Anyelina', (req, res) => {
    const usuario = "Anyelina"; 
    const apellido = "Sosa";
    const imgUrl = "https://i.pinimg.com/564x/0d/f7/4c/0df74c413ad9f8efee2e56a87821bac4.jpg";
    const profileDetails = "Una apasionada programadora aun estudiante con experiencia en el desarrollo de software. Me especializo en el desarrollo web, con un enfoque en tecnologías como JavaScript, Pyhton y Node.js. Mi objetivo es crear soluciones tecnológicas innovadoras que simplifiquen la vida de las personas y mejoren la eficiencia de los negocios";
    res.render('index', { usuario: usuario, apellido: apellido, imgUrl: imgUrl, profileDetails: profileDetails });
  });
  
  // Ruta para mostrar las habilidades del portafolio personal
  app.get('/Portafolio/Anyelina/habilidades', (req, res) => {
    const usuario = "Anyelina"; 
    const apellido = "Sosa";
    const imgUrl = "https://i.pinimg.com/564x/0d/f7/4c/0df74c413ad9f8efee2e56a87821bac4.jpg";
    const habilidades = [
        { hab: 'JavaScript', desc: 'Tengo experiencia sólida en JavaScript, un lenguaje esencial para el desarrollo web. Con JavaScript, puedo crear experiencias interactivas y dinámicas en sitios web, desde animaciones hasta validaciones de formularios. Mi dominio de JavaScript me permite desarrollar soluciones efectivas y atractivas para proyectos web.'},
        { hab: 'Python', desc: 'Soy hábil en Python, un lenguaje de programación versátil y potente. Con Python, puedo abordar una amplia gama de desafíos, desde el desarrollo de aplicaciones web hasta el análisis de datos y la automatización de tareas. Mi experiencia con Python me permite escribir código limpio y eficiente, y aprovechar su amplia variedad de bibliotecas para resolver problemas de manera efectiva.' },
        { hab: 'Node.js', desc: 'Tengo experiencia en el uso de Node.js para crear aplicaciones web escalables y de alto rendimiento. Node.js me permite desarrollar tanto el lado del cliente como el lado del servidor con JavaScript, lo que facilita la creación de aplicaciones web completas y coherentes. Con Node.js, puedo construir API RESTful, servidores web en tiempo real y más, aprovechando su eficiencia y escalabilidad.' }
      ];
    res.render('habilidades',{usuario: usuario, apellido: apellido, imgUrl: imgUrl, habilidades})
  });
  
  // Ruta para mostrar la página de contacto del portafolio personal
  app.get('/Portafolio/Anyelina/contactame', (req, res) => {
    const usuario = "Anyelina"; 
    const apellido = "Sosa";
    const direccion = "Av. Perez Gamboa Lt.8 Mz.X"; 
    const telf = "987654321";
    const email = "anyelina@gmail.com";
    const imgUrl = "https://i.pinimg.com/564x/0d/f7/4c/0df74c413ad9f8efee2e56a87821bac4.jpg";
    res.render('contacto', { usuario: usuario, apellido: apellido, imgUrl:imgUrl, direccion: direccion, telf: telf, email: email });
  });
  
  // Ruta para mostrar un portafolio ficticio
  app.get('/Portafolio/Yoongi', (req, res) => {
    const usuario = "Yoongi"; 
    const apellido = "Min";
    const imgUrl = "https://i.pinimg.com/564x/55/04/05/5504053b4422cbc29b58ef8ee11b1d7c.jpg";
    const profileDetails = "Un apasionado programador con más de 5 años de experiencia en el desarrollo de software. Me especializo en el desarrollo web y móvil, con un enfoque en tecnologías como React, React Native, y Java. Mi objetivo es crear soluciones tecnológicas innovadoras que simplifiquen la vida de las personas y mejoren la eficiencia de los negocios";
    res.render('index', { usuario: usuario, apellido: apellido, imgUrl: imgUrl, profileDetails: profileDetails });
  });
  
  // Ruta para mostrar las habilidades del portafolio ficticio
  app.get('/Portafolio/Yoongi/habilidades', (req, res) => {
    const usuario = "Yoongi"; 
    const apellido = "Min";
    const imgUrl = "https://i.pinimg.com/564x/55/04/05/5504053b4422cbc29b58ef8ee11b1d7c.jpg";
    const habilidades = [
        { hab: 'React', desc: 'Tengo experiencia sólida en React, un popular framework de JavaScript para construir interfaces de usuario interactivas. Con React, puedo crear componentes reutilizables y desarrollar aplicaciones web de una sola página (SPA) de manera eficiente. Mi conocimiento en React me permite crear interfaces de usuario dinámicas y responsivas que mejoran la experiencia del usuario.' },
        { hab: 'React Native', desc: 'Soy competente en React Native, un marco de desarrollo de aplicaciones móviles que me permite construir aplicaciones nativas para iOS y Android utilizando JavaScript y React. Con React Native, puedo desarrollar aplicaciones móviles rápidas y eficientes que se sienten y funcionan como aplicaciones nativas, mientras comparten una base de código común entre plataformas.' },
        { hab: 'Java', desc: 'Tengo experiencia en el desarrollo de aplicaciones utilizando Java, un lenguaje de programación versátil y robusto. Con Java, puedo crear una amplia variedad de aplicaciones, desde aplicaciones de escritorio hasta aplicaciones empresariales y sistemas embebidos. Mi conocimiento en Java me permite escribir código modular y escalable, y aprovechar su amplia comunidad y bibliotecas para desarrollar soluciones efectivas y confiables.' }
      ];
      res.render('habilidades', { usuario: usuario, apellido: apellido, imgUrl: imgUrl, habilidades });

  });
  
  // Ruta para mostrar la página de contacto del portafolio ficticio
  app.get('/Portafolio/Yoongi/contactame', (req, res) => {
    const usuario = "Yoongi"; 
    const apellido = "Min";
    const direccion = "Av. Perez Gamboa Lt.24 Mz.A"; 
    const telf = "912345678";
    const email = "yoongi@gmail.com";
    const imgUrl = "https://i.pinimg.com/564x/55/04/05/5504053b4422cbc29b58ef8ee11b1d7c.jpg";
    res.render('contacto', { usuario: usuario, apellido: apellido, direccion: direccion, telf: telf, email: email, imgUrl:imgUrl });
  });

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Aplicación web dinamica ejecutandose en el puerto 3000');
});