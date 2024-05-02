<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JSON CRUD Panel</title>
    <link rel="stylesheet" href="style.css" />
<!-- font-family -->
<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Andika&family=Fanwood+Text:ital@0;1&family=Roboto:ital,wght@0,100;0,300;0,400;1,100&display=swap"
		/>
			<link
			href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Quicksand&family=Ranga&display=swap"
			rel="stylesheet"
		/>		
			<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans"
		/><link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100,0,0"
		/>

        <!-- Latest compiled and minified CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    />
    <!-- Latest compiled JavaScript -->
    <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
 <style>

.ft-kalam {
	font-family: "Kalam", cursive;
}
.ft-ranga {
	font-family: "Ranga", cursive;
}
.ft-andika {
	font-family: "Andika", cursive;
}
.ft-quicksand {
	font-family: "Quicksand", cursive;
}
 </style>
  </head>
  <body>
<?php

$jsonFilePath = 'partners.json';

// Read existing JSON data
$jsonData = file_get_contents($jsonFilePath);
$data = json_decode($jsonData, true);

// Create new JSON data
if (isset($_POST['create'])) {
   
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($targetFile,PATHINFO_EXTENSION));
    
    
      // Retrieve form data
      
      $partnerName = htmlspecialchars($_POST["partnerName"]);
      $partnerUrl = htmlspecialchars($_POST["partnerUrl"]);
      $visibility = (htmlspecialchars($_POST["visibility"]) == "true") ? true : false;
      


    // Check if image file is a actual image or fake image
    if(isset($_POST["submit"])) {
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
            <h1 class='text-center'>partner created with URL</h1> 
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
           <h1 class='text-center'> Successfully added partner date created with file ". htmlspecialchars( basename( $_FILES["file"]["name"])). "</h1>
</div>"
            
          ;
           
        } else {
            if($imageFileType == null) {
                echo "   <div class='alert alert-info' role='alert'>
            <span>partner created with URL<span> 
</div> " ;
            }else{

                echo "Sorry, there was an error uploading your file.";
            }
        }
    }

    


// Data to be appended
$newData = array(
    "nmae" => $partnerName,
    "imageSrc" => '/assets/json/partner/'. $targetFile,
    "href" =>  $partnerUrl,
    "visibility" => $visibility
    // Add more key-value pairs as needed
);



    $data[] = $newData;

    // Encode and save the updated data
    file_put_contents($jsonFilePath, json_encode($data, JSON_PRETTY_PRINT));



}

// Delete JSON data
if (isset($_GET['delete'])) {
    $deleteIndex = $_GET['delete'];

    // Remove the item with the specified index
    unset($data[$deleteIndex]);

    // Re-index the array
    $data = array_values($data);

    // Encode and save the updated data
    file_put_contents($jsonFilePath, json_encode($data, JSON_PRETTY_PRINT));

    // Redirect back to the index page
    header('Location: crud.php');
    exit;
}

// Delete JSON data
if (isset($_GET['update'])) {
    $updateIndex = $_GET['update'];

 echo ' 
      <form action="update.php" method="POST"  enctype="multipart/form-data" class="crud-form ft-andika">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required />

        <label for="image">Image URL:</label>
        <input type="text" id="image" name="file" required />

        <label for="image">partner ID:</label>
        <input type="text" id="partnerId" name="key" value="'.$updateIndex.'" required />

        <button type="submit" name="update">Update</button>
      </form>';

  
    exit;
}


// Get the count of the array
// $arrayCount = count($data);

// Use a for loop to iterate through the array
$index = count($data);;

do {
  $index--;




$isChecked = ($data[$index]['visibility'] === true) ?  "checked":  "";
$NoChecked = ($data[$index]['visibility'] === true) ?  "":  "checked";
echo '<div class="row row-reverse d-flex no-input-box ft-quicksand"> <form> <div
            id="delete_partner_key_'.$index.'"
            class="card text-bg-light mb-3 m-3"
            style="max-width: 30rem"
          >';

          echo ' <div class="card-header">'.$index.'</div>
           ';

           echo '<div class="card-body">';
           echo '<h5 class="card-title">'.$data[$index]['nmae'].'</h5>';
           echo '<p class="card-text">
               '.$data[$index]['imageSrc'].'
              </p>
              <br/>';
          

                echo '
				<label for="Visibility">Visibility:
				<input type="checkbox" id="visibility" name="visibility" value="true" '.$isChecked.' /></label>';
  echo ' <small>Link : <a href="'.$data[$index]['href'].'">'.$data[$index]['href'].'</a></small
              ><br />';
              echo '<br><button
                type="button"
                onclick='."'".'setBlock("edit_partner_key_'.$index.'"), setNone("delete_partner_key_'.$index.'")'."'".'
                class="btn btn-warning "
              >
                Edit
              </button>';


            echo '
            <a class="btn btn-danger" href="crud.php?delete=' . $index . '">Delete</a>
             <a class="btn btn-primary" href="index.html">Add New</a>
            </div>
          </div>
        </form>';





    echo '		<form action="update.php" method="post"  enctype="multipart/form-data">
					<div
						id="edit_partner_key_'.$index.'"
                       
						class="card text-bg-light no-input-box mb-3 m-3 collapse"
						style="max-width: 30rem"
					>
						<div class="card-header">
                       
                         		<input type="text"   name="key" id="key" value="'.$index.'" />
						
						</div>
						<div class="card-body">
							<h5 class="card-title">
								<input type="text" id="nmae" name="partnerName" value="'.$data[$index]['nmae'].'" />
							</h5>
							<p class="card-text">
				
							</p>
							<br />

							<div class="row d-flex">

								<input type="file" name="file" id="partnerFile" 
									accept="image/*" />
								<input style="color:blue;background:#f5f5f5;" type="text" name="partnerUrl"  value="'.$data[$index]['href'].'" />

							</div>
                                           <hr />
                  <div class="row d-flex ">
                            <label class="col" for="visibility">Visibility:</label>
							<input class="col" type="radio" name="visibility" value="true" '.$isChecked.'/>
                            <label class="col">YES</label>
							<input class="col" type="radio" name="visibility" value="false" '.$NoChecked.'/>
							<label class="col" >NO</label>
                          
                            </div>
							<br />
							<button type="submit" name="update" class="btn btn-success">Update</button>
                            <a class="btn btn-danger" href="crud.php?delete=' . $index . '">Delete</a>
                            
             <a class="btn btn-primary" href="index.html">Add New</a>
						</div>
					</div>
				</form>
			</div>';
} while ($index > 0 );

?>
<script>
      function setBlock(id) {
        document.getElementById(id).style.display = "block";
      }
      function setNone(id) {
        document.getElementById(id).style.display = "none";
      }
    </script>
</body>
</html>