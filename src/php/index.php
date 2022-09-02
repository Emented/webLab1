<?php
class Validator {

}

date_default_timezone_set('Europe/Moscow');

function check_hit($x, $y, $r)
{
    $first_quarter_hit = false;
    $third_quarter_hit = false;
    $fourth_quarter_hit = false;

    if ($x >= 0 && $x <= $r / 2 && $y >= 0 && $y <= $r) {
        $first_quarter_hit = true;
    }

    if ($x <= 0 && $y <= 0 && $x * $x + $y * $y <= $r * $r) {
        $third_quarter_hit = true;
    }

    if ($x >= 0 && $y <= 0 && $y >= $x / 2 - $r) {
        $fourth_quarter_hit = true;
    }

    return $first_quarter_hit || $third_quarter_hit || $fourth_quarter_hit;
}

$start = microtime(true);

$current_time = date("H:i:s");
if (isset($_POST["x"]) && isset($_POST["y"]) && isset($_POST["r"])) {
    $x = intval($_POST["x"]);
    $y = floatval($_POST["y"]);
    $r = intval($_POST["r"]);

    $checked_hit = check_hit($x, $y, $r) ? "TRUE" : "FALSE";

    $compution_time = number_format(microtime(true) - $start, 8, ".", "") * 1000000;

    exit("
            <tr>
                <th><time>$current_time</time></th>
                <th><time>$compution_time</time></th>
                <th>$x</th>
                <th>$y</th>
                <th>$r</th>
                <th>$checked_hit</th>
            </tr>");
}
