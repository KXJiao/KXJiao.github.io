<?php
   	$destination_path = getcwd().DIRECTORY_SEPARATOR;
    print(getcwd().DIRECTORY_SEPARATOR);
	$result = 0;
 
   	$target_path = $destination_path . basename( $_FILES['file']['name']);
 
   	if(@move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
      	$result = 1;
   	}
 
   	sleep(1);
?>

<script language="javascript" type="text/javascript">
	window.top.window.stopUpload(<?php echo $result; ?>);
</script>   