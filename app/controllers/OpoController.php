<?php

class OpoController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

//	public function showWelcome()
//	{
//		return View::make('graph');
//	}
        
        public function index(){
            return View::make('opo');
        }
        
        
        public function tt() {
            
            $default_size = 512;  
            $data_file = ("C:\\xampp\htdocs\wow\app\a.zip");
            $fd = fopen ($data_file, "rb+");              
            $contents = fread ($fd, $default_size * 1024);
            //echo "<!-- $contents -->";  
            //echo $contents;
            fclose ($fd);
            
           
//            $data = array($contents);
//            $data = array('nama' => 'burung', 'bajul' => 'ijo');
            $data = json_encode($default_size);
            return Response::json($data);
            //$json = json_encode($contents);                  
            //return Response::json($json);
            //return Response::json($default_size);                        
        }
        
        public function pal() {
            $kb=512;
//            echo "streaming $kb Kb...<!-";
            flush();
            $time = explode(" ",microtime());
            $start = $time[0] + $time[1];
            for($x=0;$x<$kb;$x++){
                echo str_pad('', 1024, '.');
                flush();
            }
            $time = explode(" ",microtime());
            $finish = $time[0] + $time[1];
            $deltat = $finish - $start;
//            echo "-> Test finished in $deltat seconds. Your speed is ". round($kb / $deltat, 3)."Kb/s";
            $kbps = round($kb / $deltat,2);
            $mbps = round(($kb / $deltat)/1024);
            $becek = json_encode($mbps);
            $becak = json_encode($kbps);
            //return Response::json($becek);
            
            $data = array($becek, $becak);
            return Response::json($data);
        }

        
        
}