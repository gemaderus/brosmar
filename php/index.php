<?php

require_once dirname(__FILE__).'/lib/limonade.php';

function configure() {
  option('env', ENV_PRODUCTION);
}

dispatch('/', 'index');

  function index() {
    return html('index.html.php', 'layout.html.php');
  }

dispatch('/*', 'not_found');

  function not_found($errno, $errstr, $errfile=null, $errline=null) {
    return html('404.html.php', null);
  }

run();

