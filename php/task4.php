
<?php
session_start();
?>
<html>
    <body>
        <form action="/submit.php" method="POST">
            <input type="number" name="id" placeholder="Enter Id"/>
            <input type="text" name="value" placeholder="Enter Value"/>

            <input type="submit" value="Submit"/>

        </form>

        <div>
            <?php
            if($_SESSION['errors']){
                foreach($_SESSION['errors'] as $error){
                    echo '<p style="color:red">'.$error.'</p>';
                }
            }
            echo $_SESSION['test'];
            ?>
        </div>
    </body>
</html>

<?php



function actionSubmit()
{
    $id=$_POST["id"];
    $value=$_POST["value"];

    $errors=[];

    if(!is_numeric($id))
        $errors[]="Id is non numeric";
    if(!is_string($value))
        $errors[]="value is not string";
    if($id==null)
        $errors[]="id is empty";
    if($value==null)
        $errors[]="id is empty";



    if(count($errors)>1)
    {
        $_SESSION["errors"]=$errors;

    }
    else{
        $_SESSION["data"]=["id"=>$id,"value"=>$value];
    }
    header("Location: /task4.php");
}



