require( "./model" );
const controller = require( "./controller" );

const express = require( "express" );

const router = express.Router( );


router.post('/upload-images', function(req, res) {
 if (!req.files || Object.keys(req.files || {}).length === 0) {
  return res.status(400).send('No files were uploaded.');
 }

 const file = {...req.files.files};
 for(let i = 0 ; i < file.length; i++){

  file[i].mv('./upload/'+file[i].name, function (err){

   if(err){

    res.sendStatus(400).send(err);

   }

   res.send("file Uploaded!!!!")

  })}

  file.mv('./upload/'+Date.now()+file.name, function (err){

   if(err){

    res.sendStatus(400).send(err);

   }

   res.status(500).send(`${Date.now()+file.name},file Uploaded!!!`)

  })
 // uploadPath = __dirname + '/upload/' + sampleFile.name;
 //
 // // Use the mv() method to place the file somewhere on your server
 // sampleFile.mv(uploadPath, function(err) {
 //  if (err)
 //   return res.status(500).send(err);
 //
 //  res.send('File uploaded!');
 // });
});

router.post( "/", controller.create );

router.put( "/:id", controller.update );

router.delete( "/:id", controller.delete );

router.post( "/get", controller.list );

router.get( "/:id", controller.detail );

 module.exports = router;
