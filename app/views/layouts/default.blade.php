<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->

<!doctype html>
<html>
<head>
	 @include('includes.head')                      
</head>
<body>    
<div class="container">
    
        <div id="main" class="row">
            @yield('content')
        </div>

        <footer class="row">
            @include('includes.footer')
        </footer>
    
</div>    
    

    <script type="text/javascript">
        $('#popoverData').popover();
        $('#popoverOption').popover({ trigger: "hover" });
        $('#popover1').popover({ trigger: "hover" });
        $('#popover2').popover({ trigger: "hover" });
    </script>        

</body>
</html>
