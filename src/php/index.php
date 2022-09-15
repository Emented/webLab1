<?php
include 'checker.php';

date_default_timezone_set('UTC');

$start = microtime(true);

$response = [];

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(!isset($_SESSION['table'])) {
        $_SESSION['table'] = '';
    }

    $response = $_SESSION['table'];

    exit($response);
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $_SESSION['table'] = null;

    $message = "Table cleaned successfully!";
    $data["message"] = $message;

    exit($message);
}

if (!isset($x) || !isset($y) || !isset($r) || !isset($utc)) {
    $x = $_POST['x'];
    $y = $_POST['y'];
    $r = $_POST['r'];
    $utc = $_POST['utc'];
    if (!is_numeric($x) || !is_numeric($y) || !is_numeric($r) || !is_numeric($utc)) {
                $data["message"] = "Only number must be passed";
                http_response_code(400);
    } else {
        $current_time = date("H:i:s", time() - $utc * 60);
        $hit_checker = new HitChecker();
        $checked_hit = $hit_checker->check($x, $y, $r) ? "TRUE" : "FALSE";

        $compution_time = number_format((microtime(true) - $start) * 1000000, 2, ".", "");

        $data["x"] = $x;
        $data["y"] = $y;
        $data["r"] = $r;
        $data["current_time"] = $current_time;
        $data["finish_time"] = $compution_time;
        $data["checked_hit"] = $checked_hit;

        $row = "
            <tr>
                <th><time>$current_time</time></th>
                <th><time>$compution_time</time></th>
                <th>$x</th>
                <th>$y</th>
                <th>$r</th>
                <th>$checked_hit</th>
            </tr>";

        if(!isset($_SESSION['table'])) {
            $_SESSION['table'] = '';
        }

        $response = $_SESSION['table'].$row;

        $_SESSION['table'] = $response;

        http_response_code(200);
    }
} else {
    $data["message"] = "Some parameters are missing: x, y, r expected.";
    http_response_code(400);
}
echo $response;
?>

