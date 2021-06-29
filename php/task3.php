<?php

Class Task{

    protected $id;
    public function __construct($id){
        $this->id=$id;

    }

    static function connectDB()
    {
        $servername = "localhost";
        $username = "username";
        $password = "password";
        $dbname = "myDB";

        // Create connection

        // $conn= mysqli_connect($servername,$username,$password,$dbname);

        return "success";
    }

    public static function getTasks($id)
    {
        Task::connectDB();
        return "Task ".$id;
    }

    public function output()
    {
        return "Task ".$this->id;
    }

}


$task = new Task(1);
echo "Output by using external function: <br>";
echo $task->output();
echo "<br><br>";
echo "Output by using static function: <br>";
echo Task::getTasks(5);