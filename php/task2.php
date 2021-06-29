<?php

$array= [
    ["id"=>1,"price"=>100],
    ["id"=>2,"price"=>300],
    ["id"=>3,"price"=>500],
    ["id"=>4,"price"=>600],

];

function filter($array,$threshold)
{
   return array_filter($array, function($e) use($threshold){
       return $e["price"]>$threshold;
   });
}

function sum($array)
{
    return array_sum(array_column($array, 'price'));
}

$filtered_array=filter($array,300);
$sum=sum($filtered_array);
echo "Filtered Array: <br>";
var_dump($filtered_array);
echo "<br><br> Total Sum: <br>";

echo ($sum);