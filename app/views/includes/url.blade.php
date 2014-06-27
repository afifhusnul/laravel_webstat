<script type="text/javascript">
	var url_home = '{{ route('home') }}';
        
	var url_login = '{{ route('login') }}';
	var url_logout = '{{ route('logout') }}';
	
	var token = '{{ csrf_token() }}';
        
        var url_data_role = '{{ route('role') }}';
        var url_hapus_role = '{{ route('hapus_role') }}';
        var url_edit_role = '{{ route('edit_role') }}';
        var url_pdf_role = '{{ route('pdf_role') }}';
	var url_excel_role = '{{ route('excel_role') }}';
        
</script>