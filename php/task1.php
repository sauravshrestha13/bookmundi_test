<?php

$xml = simplexml_load_file("http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml");
$json = json_encode($xml,JSON_PRETTY_PRINT);

echo $json;
