<?php



function actionSubmit()
{   
    $errors=[];


    
    if(!$_POST["id"] || $_POST["id"]=="")
        $errors[]="id is empty";

    if(!$_POST["value"] || $_POST["value"]=="")
        $errors[]="value is empty";

   

    if(count($errors)>0)
    {
        return json_encode(["status"=>"error","messages"=>$errors]);

    }
    else{
        return json_encode(["status"=>"success", "data"=>["id"=>$_POST["id"],"value"=>$_POST["value"]]]);
    }
   
}

echo actionSubmit();

