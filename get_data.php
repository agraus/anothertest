<?php
$response = [
        "value" => random_int(1,100),
        "delay" => random_int(500,2000)
    ];

echo json_encode($response);

?>