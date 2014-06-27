<meta charset="utf-8">
<meta name="description" content="">
<meta name="author" content="Afif">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />

<title>Chemplung exercise</title>
<link rel="icon" type="image/png" href="{{ asset('assets/img/favicon.png') }}">
{{ HTML::style('assets/css/style.css') }}
{{ HTML::script('assets/js/jquery-1.11.0.js') }}
{{ HTML::script('assets/js/bootstrap.js') }}
{{ HTML::script('assets/js/datepicker.js') }}
{{ HTML::script('assets/js/form.js') }}
{{ HTML::script('assets/js/underscore.js') }}
{{ HTML::script('assets/js/backbone.js') }}
{{ HTML::script('assets/js/messenger.js') }}
{{ HTML::script('assets/js/highcharts.js') }}
{{ HTML::script('assets/js/modules/exporting.js') }}
{{ HTML::script('assets/js/future.js') }}    
{{ HTML::script('assets/js/flot/jquery.flot.js') }}
{{ HTML::script('assets/js/flot/jquery.flot.time.js') }}
{{ HTML::script('assets/js/flot/jquery.flot.axislabels.js') }}
{{ HTML::script('assets/js/scripts/mysql.js') }}

{{ HTML::script('assets/js/smoothie.js') }}


<!-- Bootstrap menu -->

<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="dashboard">Chemplung</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        @if(!Auth::check())
            <ul class="nav navbar-nav">                
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Web graph<b class="caret"></b></a>
                  <ul class="dropdown-menu">
                      <li>{{ HTML::link('/', 'Web graph') }}</li>   
                      <li><a href="opo">Web Stat</a></li>
                  </ul>
                </li>                                                
                <li>{{ HTML::link('cpu', 'Cpu Graph') }}</li>                   
            
            </ul>
        @else
        <ul class="nav navbar-nav">                        
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Admin<b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="role">Role</a></li>
                <li><a href="register">User</a></li>                
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>      
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Welcome  <strong>{{ Auth::user()->username }}</strong></a></li>
                    <li><a href="logout"><i class="glyphicon glyphicon-off"></i> Logout</a></li>
            </ul>
        @endif        
   </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
