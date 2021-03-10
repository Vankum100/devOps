<?php

  $url = $_REQUEST['rquest'];
  $components = explode("/", $url);
  $value = (float)$components[2];
  $square = $value * $value;
  header("Content-Type: application/json; charset=UTF-8");
  $result = (object) array(
    'value' => $value,
    'square' => $square
  );
  echo json_encode($result);

?>