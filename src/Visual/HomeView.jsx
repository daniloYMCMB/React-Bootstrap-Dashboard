import React from 'react'
import SideBarView from './SideBarView';
import CircleThumbnail from './CircleThumbnail';
import ReviewCard from './ReviewCard';
import DeckedCard from './DeckedCard'
import Highlight from '../Utils/Highlight';

const HomeView = () => {
    return (
        <div class="container-fluid" id="main">
            <div class="row row-offcanvas row-offcanvas-left">
                <SideBarView />
                {/* <!--/col--> */}

                <div class="col main pt-5 mt-3">
                    <h1 class="display-4 d-none d-sm-block">
                        Bootstrap 4 Dashboard
            </h1>
                    <p class="lead d-none d-sm-block">Plus off-canvas sidebar, based on Bootstrap v4</p>

                    <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>Holy guacamole!</strong> It's free.. this is an example theme.
            </div>
                    <div class="row mb-3">
                        <ReviewCard color="bg-success" title="Users" data="135" icon="fa fa-user" />
                        <ReviewCard color="bg-danger" title="Posts" data="88" icon="fa fa-plus-square" />
                        <ReviewCard color="bg-info" title="Ads" data="126" icon="fa fa-ad" />
                        <ReviewCard color="bg-warning" title="Badges" data="15" icon="fa fa-award " />

                    </div>
                    Code example:
                            <Highlight code={'<ReviewCard color="bg-success" title="Users" data="135" icon="fa fa-user" />'} />

                    {/* <!--/row--> */}

                    <hr />
                    <div class="row placeholders mb-3">
                        <CircleThumbnail inside="100" title="My text" subtitle="This works!!" />
                        <CircleThumbnail inside="101" title="My text" subtitle="This works!!" />
                        <CircleThumbnail inside="102" title="My text" subtitle="This works!!" />
                        <CircleThumbnail inside="103" title="My text" subtitle="This works!!" />
                    </div>

                    <a id="features"></a>
                    <hr />
                    <p class="lead mt-5">
                        Are you ready for Bootstap 4? It's the 4th generation of this popular responsive framework. Bootstrap 4 will include some interesting
                        new features such as flexbox, 5 grid sizes (now including xl), cards, `em` sizing, CSS normalization (reboot) and larger font
                        sizes.
            </p>
                    <div class="row my-4">
                        <div class="col-lg-3 col-md-4">
                            <div class="card">
                                <img class="card-img-top img-fluid" src="//placehold.it/740x180/bbb/fff?text=..." alt="Card image cap" />
                                <div class="card-body">
                                    <h4 class="card-title">Layouts</h4>
                                    <p class="card-text">Flexbox provides simpler, more flexible layout options like vertical centering.</p>
                                    <a href="#" class="btn btn-primary">Button</a>
                                </div>
                            </div>
                            <div class="card card-inverse bg-inverse mt-3">
                                <div class="card-body">
                                    <h3 class="card-title">Flexbox</h3>
                                    <p class="card-text">Flexbox is now the default, and Bootstrap 4 supports SASS out of the box.</p>
                                    <a href="#" class="btn btn-outline-secondary">Outline</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead class="thead-inverse">
                                        <tr>
                                            <th>#</th>
                                            <th>Label</th>
                                            <th>Header</th>
                                            <th>Column</th>
                                            <th>Data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1,001</td>
                                            <td>responsive</td>
                                            <td>bootstrap</td>
                                            <td>cards</td>
                                            <td>grid</td>
                                        </tr>
                                        <tr>
                                            <td>1,002</td>
                                            <td>rwd</td>
                                            <td>web designers</td>
                                            <td>theme</td>
                                            <td>responsive</td>
                                        </tr>
                                        <tr>
                                            <td>1,003</td>
                                            <td>free</td>
                                            <td>open-source</td>
                                            <td>download</td>
                                            <td>template</td>
                                        </tr>
                                        <tr>
                                            <td>1,003</td>
                                            <td>frontend</td>
                                            <td>developer</td>
                                            <td>coding</td>
                                            <td>card panel</td>
                                        </tr>
                                        <tr>
                                            <td>1,004</td>
                                            <td>migration</td>
                                            <td>bootstrap 4</td>
                                            <td>mobile-first</td>
                                            <td>design</td>
                                        </tr>
                                        <tr>
                                            <td>1,005</td>
                                            <td>navbar</td>
                                            <td>sticky</td>
                                            <td>jumbtron</td>
                                            <td>header</td>
                                        </tr>
                                        <tr>
                                            <td>1,006</td>
                                            <td>collapse</td>
                                            <td>affix</td>
                                            <td>submenu</td>
                                            <td>flexbox</td>
                                        </tr>
                                        <tr>
                                            <td>1,007</td>
                                            <td>layout</td>
                                            <td>examples</td>
                                            <td>themes</td>
                                            <td>grid</td>
                                        </tr>
                                        <tr>
                                            <td>1,008</td>
                                            <td>migration</td>
                                            <td>bootstrap 4</td>
                                            <td>flexbox</td>
                                            <td>design</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <!--/row--> */}

                    <a id="more"></a>
                    <hr />
                    <h2 class="sub-header mt-5">Use card decks for equal height rows of cards</h2>
                    <div class="mb-3">
                        <div class="card-deck">
                            <DeckedCard>
                                <p>It's really good news that the new Bootstrap 4 now has support for CSS 3 flexbox.</p>
                                <footer>Makes flexible layouts <cite title="Source Title">Faster</cite></footer>
                            </DeckedCard>
                            <DeckedCard>
                                <p>The Bootstrap 3.x element that was called "Panel" before, is now called a "Card".</p>
                                <footer>All of this makes more <cite title="Source Title">Sense</cite></footer>
                            </DeckedCard>
                            <DeckedCard>
                                <p>There are also some interesting new text classes for uppercase and capitalize.</p>
                                <footer>These handy utilities make it <cite title="Source Title">Easy</cite></footer>
                            </DeckedCard>
                            <DeckedCard>
                                <p>If you want to use cool icons in Bootstrap 4, you'll have to find your own such as Font Awesome or Ionicons.</p>
                                <footer>The Glyphicons are not <cite title="Source Title">Included</cite></footer>
                            </DeckedCard>
                        </div>
                    </div>
                    {/* <!--/row--> */}

                    <a id="flexbox"></a>
                    <hr />
                    <h2 class="mt-5">Masonry-style grid columns</h2>
                    <h6>with Bootstrap 4 flexbox</h6>

                    <div class="card-columns mb-3">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="//placehold.it/600x200/444/fff?text=..." alt="Card image cap" />>
                    <div class="card-body">
                                <h4 class="card-title">New XL Grid Tier</h4>
                                <p class="card-text">With screens getting smaller, Bootstrap 4 introduces a new grid breakpoint with the col-xl-* classes. This extra tier extends the media query range all the way down to 576 px. Eventhough the new XL tier would make one think it’s been added to support extra large screens, it’s actually the opposite.</p>
                            </div>
                        </div>
                        <div class="card card-body">
                            <blockquote class="card-blockquote">
                                <p>Bootstrap 4 will be lighter and easier to customize.</p>
                                <footer>
                                    <small class="text-muted">
                                        Someone famous like <cite title="Source Title">Mark Otto</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div class="card">
                            <img class="card-img-top img-fluid" src="//placehold.it/600x200/bbb/fff?text=..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card card-body card-inverse card-primary text-center">
                            <blockquote class="card-blockquote">
                                <p>Create masonry or Pinterest-style card layouts in Bootstrap 4.</p>
                                <footer>
                                    <small>
                                        Someone famous in <cite title="Source Title">Bootstrap</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div class="card card-body text-center">
                            <h4 class="card-title">Clever heading</h4>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
                        </div>
                        <div class="card">
                            <img class="card-img img-fluid" src="//placehold.it/600x200/777/fff?text=..." alt="Card image" />
                        </div>
                        <div class="card card-body text-right">
                            <blockquote class="card-blockquote">
                                <p>There are also some interesting new text classes to uppercase or capitalize.</p>
                                <footer>
                                    <small class="text-muted">
                                        Someone famous in <cite title="Source Title">Bootstrap</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div class="card card-body">
                            <h4 class="card-title">Responsive</h4>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <ul class="list-unstyled">
                                    <li class="text-capitalize"><code class="text-lowercase">text-capitalize</code> Capitalize each word</li>
                                    <li class="text-uppercase"><code class="text-lowercase">text-uppercase</code> Uppercase text</li>
                                    <li class="text-success"><code>text-success</code> Contextual colors for text</li>
                                    <li><code>text-muted</code> <span class="text-muted">Lighten with muted</span></li>
                                    <li><code>text-info</code> <span class="text-muted">Info text color</span></li>
                                    <li><code>text-danger</code> <span class="text-muted">Danger text color</span></li>
                                    <li><code>text-warning</code> <span class="text-muted">Warning text color</span></li>
                                    <li><code>text-primary</code> <span class="text-primary">Primary text color</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card card-body">
                            <h4 class="card-title">Heading</h4>
                            <p class="card-text">So now that you've seen some of what Bootstrap 4 has to offer, are you going to give it a try?</p>
                            <p class="card-text"><small class="text-muted">Last updated 12 mins ago</small></p>
                        </div>
                    </div>
                    {/* <!--/card-columns--> */}

                    <a id="layouts"></a>
                    <hr />
                    <h2 class="sub-header mt-5">Interesting layouts and elements</h2>
                    <div class="row mb-3">
                        <div class="col-lg-6">

                            <div class="card mb-3">
                                <div class="card-header">
                                    Bye .well, .panel &amp; .thumbnail
                        </div>
                                <div class="card-body">
                                    <h4 class="card-title">Replaced with .card</h4>
                                    <p class="card-text">All of these Bootstrap 3.x components have been dropped entirely for the new card component.</p>
                                    <button type="button" class="btn btn-secondary btn-lg">Large</button>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-6">
                            {/* <!-- Nav tabs --> */}
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#home1" role="tab" data-toggle="tab">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#profile1" role="tab" data-toggle="tab">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#messages1" role="tab" data-toggle="tab">Messages</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#settings1" role="tab" data-toggle="tab">Settings</a>
                                </li>
                            </ul>

                            {/* <!-- Tab panes --> */}
                            <div class="tab-content">
                                <br />
                                <div role="tabpanel" class="tab-pane active" id="home1">
                                    <h4>Home</h4>
                                    <p>
                                        1. These Bootstrap 4 Tabs work basically the same as the Bootstrap 3.x tabs.
                                <br />
                                        <br />
                                        <button class="btn btn-primary-outline btn-lg">Wow</button>
                                    </p>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="profile1">
                                    <h4>Pro</h4>
                                    <p>
                                        2. Tabs are helpful to hide or collapse some addtional content.
                            </p>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="messages1">
                                    <h4>Messages</h4>
                                    <p>
                                        3. You can really put whatever you want into the tab pane.
                            </p>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="settings1">
                                    <h4>Settings</h4>
                                    <p>
                                        4. Some of the Bootstrap 3.x components like well and panel have been dropped for the new card component.
                            </p>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-lg-6">
                            <div class="card card-default card-body">
                                <ul id="tabsJustified" class="nav nav-tabs nav-justified">
                                    <li class="nav-item">
                                        <a class="nav-link" href="" data-target="#tab1" data-toggle="tab">List</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="" data-target="#tab2" data-toggle="tab">Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="" data-target="#tab3" data-toggle="tab">More</a>
                                    </li>
                                </ul>
                                {/* <!--/tabs--> */}
                                <br />
                                <div id="tabsJustifiedContent" class="tab-content">
                                    <div class="tab-pane" id="tab1">
                                        <div class="list-group">
                                            <a href="" class="list-group-item"><span class="float-right label label-success">51</span> Home Link</a>
                                            <a href="" class="list-group-item"><span class="float-right label label-success">8</span> Link 2</a>
                                            <a href="" class="list-group-item"><span class="float-right label label-success">23</span> Link 3</a>
                                            <a href="" class="list-group-item text-muted">Link n..</a>
                                        </div>
                                    </div>
                                    <div class="tab-pane active" id="tab2">
                                        <div class="row">
                                            <div class="col-sm-7">
                                                <h4>Profile Section</h4>
                                                <p>Imagine creating this simple user profile inside a tab card.</p>
                                            </div>
                                            <div class="col-sm-5"><img src="//placehold.it/170" class="float-right img-responsive img-rounded" /></div>
                                        </div>
                                        <hr />
                                        <a href="javascript:;" class="btn btn-info btn-block">Read More Profiles</a>
                                        <div class="spacer5"></div>
                                    </div>
                                    <div class="tab-pane" id="tab3">
                                        <div class="list-group">
                                            <a href="" class="list-group-item"><span class="float-right label label-info label-pill">44</span> <code>.panel</code> is now <code>.card</code></a>
                                            <a href="" class="list-group-item"><span class="float-right label label-info label-pill">8</span> <code>.nav-justified</code> is deprecated</a>
                                            <a href="" class="list-group-item"><span class="float-right label label-info label-pill">23</span> <code>.badge</code> is now <code>.label-pill</code></a>
                                            <a href="" class="list-group-item text-muted">Message n..</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--/tabs content--> */}
                            </div>
                            {/* <!--/card--> */}
                        </div>
                        {/* <!--/col--> */}
                        <div class="col-lg-6">
                            <div id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="card">
                                    <div class="card-header" role="tab" id="headingOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion example
                        </div>
                                    <div id="collapseOne" class="card-block collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <p>This is a Bootstrap 4 accordion that uses the <code>.card</code> classes instead of <code>.panel</code>. The single-open section aspect is not working because the parent option (dependent on .panel) has not yet been finalized in BS 4 alpha. </p>
                                    </div>
                                    <div class="card-header" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Mobile-first
                        </div>
                                    <div id="collapseTwo" class="card-block collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <p>Just like it's predecesor, Bootstrap 4 is mobile-first so that you start by designing for smaller devices such as smartphones and tablets, then proceed to laptop and desktop layouts.</p>
                                    </div>
                                    <div class="card-header" role="tab" id="headingThree" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Built for CSS3
                        </div>
                                    <div id="collapseThree" class="card-block collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <p>Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross browser styles.</p>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-4">
                                <a href="/go/KrUO8QpyXP/bootstrao-4-dashboard" target="_ext">Get this Bootstrap 4 admin dashboard at Codeply</a>
                            </p>
                        </div>
                        {/* <!--/col--> */}
                    </div>
                    {/* <!--/row--> */}

                </div>
                {/* <!--/main col--> */}
            </div>

        </div>
  )
}

export default HomeView
