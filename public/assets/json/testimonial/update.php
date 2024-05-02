<?php

$jsonFilePath = 'testimonials.json';

// Read existing JSON data
$jsonData = file_get_contents($jsonFilePath);
$data = json_decode($jsonData, true);

// Create new JSON data
if (isset($_POST['update'])) {
   
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($targetFile,PATHINFO_EXTENSION));
    
    
      // Retrieve form data
       $key = htmlspecialchars($_POST["key"]);
      $testimonialName = htmlspecialchars($_POST["name"]);
      $testimonialAbout = htmlspecialchars($_POST["about"]);
      $testimonialQuote = htmlspecialchars($_POST["quote"]);
      $testimonialSocialLink = htmlspecialchars($_POST["socialLink"]);
      $visibility = (htmlspecialchars($_POST["visibility"]) == "true") ? true : false;
      


    // Check if image file is a actual image or fake image
    if(isset($_POST["file"])) {
        $check = getimagesize($_FILES["file"]["tmp_name"]);
        if($check !== false) {
            echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            echo "File is not an image.";
            $uploadOk = 0;
        }
    }

    // Check file size
    if ($_FILES["file"]["size"] > 1000000) {
        echo "Sorry, your file is too large. Sirf 1 MB";
        $uploadOk = 0;
    }

    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" && $imageFileType != "pdf" ) {
        if($imageFileType == null) {
            echo "
            
            <div class='alert alert-success' role='alert'>
            <h1 class='text-center'>testimonial created with URL</h1> 
</div>" ;
        $uploadOk = 2;
        } else {
            echo "Sorry, only JPG, JPEG, PNG , PDF & GIF files are allowed."; 
        $uploadOk = 0;
        }
    } 
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
            echo "
            <div class='alert alert-success' role='alert'>
           <h1 class='text-center'> Successfully added testimonial date created with file ". htmlspecialchars( basename( $_FILES["file"]["name"])). "</h1>
</div>"
            
          ;
           
        } else {
            if($imageFileType == null) {
                echo "   <div class='alert alert-info' role='alert'>
            <span>testimonial created with URL<span> 
</div> " ;
            }else{

                echo "Sorry, there was an error uploading your file.";
            }
        }
    }

    


// Data to be appended
$newData = array(
   "name" => $testimonialName,
    "about" => $testimonialAbout,
    "social_links" => $testimonialSocialLink,
    "img_url" => '/assets/json/testmonial/'. $targetFile,
    "quote" =>  $testimonialQuote,
    "visibility" => $visibility
    // Add more key-value pairs as needed
);






    $data[$key] = $newData;

    // Encode and save the updated data
    file_put_contents($jsonFilePath, json_encode($data, JSON_PRETTY_PRINT));





                            // Redirect back to the index page
    header('Location: crud.php');
    exit;
}





 
?>