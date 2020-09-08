<template>
  <div id="app">
    <div id="page-wrapper">

			<!-- Header -->
				<div id="header-wrapper">
					<div class="container">

						<!-- Header -->
							<header id="header">
								<div class="inner">

									<!-- Logo -->
										<h1><a href="index.html" id="logo">Crosso</a></h1>

									<!-- Nav -->
										<nav id="nav">
											<ul>
												<li class="current_page_item"><router-link to="/">Home</router-link></li>
                        <li class="current_page_item"><router-link to="/games">Games</router-link></li>
                        <li class="current_page_item"><router-link to="/signup">Signup</router-link></li>
                        <li class="current_page_item"><router-link to="/login">Login</router-link></li>
                        <li class="current_page_item"><router-link to="/logout">Logout</router-link></li>
												
											</ul>
										</nav>

								</div>
							</header>

						<!-- Banner -->
							<div id="banner">
								<h2><strong></strong> For the FGC
								<br />
								By the FGC</h2>
								
							</div>

					</div>
				</div>

			<!-- Main Wrapper -->
				<div id="main-wrapper">
					<!-- <div class="wrapper style1"> -->
						<div class="inner">

							<!-- Feature 1 -->
								<section class="container box feature1">
									<div class="row">
										<div class="col-12">
											<header class="first major">
												<h2></h2>
												<p><router-view/> <strong></strong> </p>
											</header>
										</div>
										
										<!-- <div class="col-4 col-12-medium">
											<section>
												<a href="#" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
												<header class="second icon solid fa-cog">
													<h3>Also a Heading</h3>
													<p>And another subtitle</p>
												</header>
											</section>
										</div>
										<div class="col-4 col-12-medium">
											<section>
												<a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
												<header class="second icon solid fa-chart-bar">
													<h3>Another Heading</h3>
													<p>And yes, a subtitle</p>
												</header>
											</section>
										</div> -->
										<!-- <div class="col-12">
											<p></p>
										</div> -->
									</div>
								</section>

						</div>
					<!-- </div> -->
					<!-- <div class="wrapper style2"> -->
						<!-- <div class="inner"> -->

							<!-- Feature 2 -->
								<!-- <section class="container box feature2">
									<div class="row">
										<div class="col-6 col-12-medium">
											<section>
												<header class="major">
													<h2>And this is a subheading</h2>
													<p>It’s important but clearly not *that* important</p>
												</header>
												<p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.
												Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat.
												Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi
												consequat etiam.</p>
												<footer>
													<a href="#" class="button medium icon solid fa-arrow-circle-right">Let's do this</a>
												</footer>
											</section>
										</div>
										<div class="col-6 col-12-medium">
											<section>
												<header class="major">
													<h2>This is also a subheading</h2>
													<p>And is as unimportant as the other one</p>
												</header>
												<p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.
												Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat.
												Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi
												consequat etiam.</p>
												<footer>
													<a href="#" class="button medium alt icon solid fa-info-circle">Wait, what?</a>
												</footer>
											</section>
										</div>
									</div>
								</section> -->

							<!-- </div>
					</div> -->
					<!-- <div class="wrapper style3"> -->
						<div class="inner">
							<div class="container">
								<div class="row">
									<div class="col-8 col-12-medium">

										<!-- Article list -->
											<!-- <section class="box article-list">
												<h2 class="icon fa-file-alt">Recent Posts</h2> -->

												<!-- Excerpt -->
													<!-- <article class="box excerpt">
														<a href="#" class="image left"><img src="images/pic04.jpg" alt="" /></a>
														<div>
															<header>
																<span class="date">July 24</span>
																<h3><a href="#">Repairing a hyperspace window</a></h3>
															</header>
															<p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus
															semper mod quisturpis nisi consequat etiam lorem. Phasellus quam turpis,
															feugiat et sit amet ornare in, hendrerit in lectus semper mod quis eget mi dolore.</p>
														</div> -->
													<!-- </article> -->

												<!-- Excerpt -->
													<!-- <article class="box excerpt">
														<a href="#" class="image left"><img src="images/pic05.jpg" alt="" /></a>
														<div>
															<header>
																<span class="date">July 18</span>
																<h3><a href="#">Adventuring with a knee injury</a></h3>
															</header>
															<p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus
															semper mod quisturpis nisi consequat etiam lorem. Phasellus quam turpis,
															feugiat et sit amet ornare in, hendrerit in lectus semper mod quis eget mi dolore.</p>
														</div>
													</article> -->

												<!-- Excerpt -->
													<!-- <article class="box excerpt">
														<a href="#" class="image left"><img src="images/pic06.jpg" alt="" /></a>
														<div>
															<header>
																<span class="date">July 14</span>
																<h3><a href="#">Preparing for Y2K38</a></h3>
															</header>
															<p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus
															semper mod quisturpis nisi consequat etiam lorem. Phasellus quam turpis,
															feugiat et sit amet ornare in, hendrerit in lectus semper mod quis eget mi dolore.</p>
														</div>
													</article> -->

											</section>
									</div>
									<div class="col-4 col-12-medium">

										<!-- Spotlight -->
											<!-- <section class="box spotlight">
												<h2 class="icon fa-file-alt">Spotlight</h2>
												<article>
													<a href="#" class="image featured"><img src="images/pic07.jpg" alt=""></a>
													<header>
														<h3><a href="#">Neural Implants</a></h3>
														<p>The pros and cons. Mostly cons.</p>
													</header>
													<p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus semper mod
													quisturpis nisi consequat ornare in, hendrerit in lectus semper mod quis eget mi quat etiam
													lorem. Phasellus quam turpis, feugiat sed et lorem ipsum dolor consequat dolor feugiat sed
													et tempus consequat etiam.</p>
													<p>Lorem ipsum dolor quam turpis, feugiat sit amet ornare in, hendrerit in lectus semper
													mod quisturpis nisi consequat etiam lorem sed amet quam turpis.</p>
													<footer>
														<a href="#" class="button alt icon solid fa-file-alt">Continue Reading</a>
													</footer>
												</article>
											</section> -->

									</div>
								</div>
							</div>
						</div>
					<!-- </div> -->
				</div>

			<!-- Footer Wrapper -->
				<div id="footer-wrapper">
					<footer id="footer" class="container">
						<div class="row">
							<div class="col-3 col-6-medium col-12-small">

								

							</div>
							<div class="col-6 col-12-medium imp-medium">

								
								<!-- Contact -->
                <section id="footer">
                  
			<ul class="icons">
        <div class="row">
				<li><a href="#" class="icon brands fa-twitter fa-5x"><span class="label">Twitter</span></a></li> <br> 
				<li><a href="#" class="icon brands fa-github fa-5x"><span class="label">Github</span></a></li> <br>
				<li><a href="#" class="icon brands fa-linkedin-in fa-5x"><span class="label">LinkedIn</span></a></li>
        <li><a href="#" class="icon brands fa-facebook fa-5x"><span class="label">LinkedIn</span></a></li>
        </div>
			</ul>
			
	</section>
								

							</div>
							
						</div>
					</footer>
				</div>

		</div>
    
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
