<!DOCTYPE html>
<html lang="en" >
<head >
    <meta charset="utf-8" >
    <meta http-equiv="X-UA-Compatible" content="IE=edge" >
    <meta name="viewport" content="width=device-width, initial-scale=1" >
    <title >{{env('APP_NAME',"NEW APP")}}</title >
    <meta id="csrf-token" name="csrf-token" content="{{ csrf_token() }}" >
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{asset('css/base.css')}}" >
    <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}" >

</head >
<body >

<div id="appRoot" ></div >
<script type="text/javascript" src="{{asset('js/boot.js')}}" ></script >
<script type="text/javascript" src="{{asset('js/base.js')}}" ></script >
<script type="text/javascript" src="{{asset('js/app.js')}}" ></script >
</body >
</html >