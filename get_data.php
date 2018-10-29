<?php
$response = [
        "value" => random_int(1,100),
        "delay" => random_int(1000,3000)
    ];

echo json_encode($response);

?>