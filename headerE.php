<?php
	$consent = true;
		if(!isset($_COOKIE["cookie"])) {
			$consent = false;
		}
	?>
<div class="menu"><table border="0">
  <tbody>
    <tr class="row1">
      <td colspan="5">Saghlam Hayat</td>
      <td width="7%" class="link"><a href="../Уйғур/Cyrillic.php">Уйғур</a></td>
      <td width="7%" class="c"><u>ENG</u></td>
      <td width="7%" class="link"><a href="../ئۇيغۇر/Uyghur.php">ئۇيغۇر</a></td>
      <td width="7%" class="link"><a href="../Қазақ/Kazakh.php">Қазақ</a></td>
	  <td width="1%">|</td>
      <td width="7%"><center><a href="English.php"><img src="../images/home.png" alt="" width="20px" class="link"/></a></center>
		</td>
      <td width="7%" class="link"><a href="More.php">More</a></td>
	  <td width="7%" class="link"><a href="profile.php">Profile</a></td>
	  <td width="30%" class="link"><form method="get" action="../search.php">
		<input type="text" name="q" style="padding: 2%; border-radius: 5px; border-width: 0px">
		<input type="submit" value="Search" style="height: 30px;
	width: 100px;
	font-size: 100%;
	border-radius: 12px;
	background-color: #074600;
	transition-duration: 0.4s;
	border: 2px solid white;
	color: #FFFFFF;
	display: inline;">
	</form></td>
    </tr>
    <tr class="row2">
       <td colspan="11">Saghlam Hayat</td>
      <td width="5%"><center><img src="../images/more.png" alt="" width="20px" class="link menu2" style="transform: translateX(-13px)" onclick="menu()" id="open"/></center></td>
    </tr>
  </tbody>
</table>
</div>
<div class="men2" id="men2"><table>
  <tbody>
	  <tr>
      <td class="link men2td"><a href="English.php"><img src="../images/home.png" alt="" width="20px">  Home</a></td>
      </tr>
    <tr>
      <td class="link men2td"><a href="More.php">More</a></td>
      </tr>
	  <tr>
      <td><hr style="width: 100%; color: #FFFFFF;"></td>
    </tr>
    <tr>
      <td class="link men2td"><a href="../Уйғур/Cyrillic.php">Уйғур</a></td>
      </tr>
    <tr>
      <td class="c men2td"><u>ENG</u></td>
      </tr>
    <tr>
      <td class="link men2td"><a href="../ئۇيغۇر/Uyghur.php">ئۇيغۇر</a></td>
      </tr>
    <tr>
      <td class="link men2td"><a href="../Қазақ/Kazakh.php">Қазақ</a></td>
      </tr>
    
  </tbody>
</table>
</div>
<?php if($consent == false) { ?>
<div id="cookie" class="cookie">
<a>We use cookies.</a><br>
<button onClick="agree()" class="submit">I agree</button>
</div>
<script>
		function agree() {
			document.getElementById("cookie").style.opacity="0";
			setCookie("cookie", "true", 365)
		}
		function setCookie(cookieName, cookieValue, expdays) {
 			var d = new Date();
 			d.setTime(d.getTime() + (expdays * 24 * 60 * 60 * 1000));
 			var expires = "; expires=" + d.toUTCString();
 			document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
		}
</script>
<?php } ?>