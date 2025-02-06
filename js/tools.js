$(function(){
    const fontawesome = '<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">';
    $("head").prepend(fontawesome);

    const extension = '<li class="header">INIAD++ CONTENTS</li>'
    $(".sidebar-menu").append(extension);
    const inserthtml = '<li class="treeview">    <a href="#">        <i class="fas fa-link"></i>        <span>            <span class="sidebar-menu-text">外部リンク</span>        </span>        <span class="pull-right-container">            <i class="fa fa-angle-left pull-right"></i>        </span>    </a>    <ul class="treeview-menu" style="display: none;">        <li>            <a href="https://iniad-lectures.slack.com" target="_blank"><span><span class="sidebar-menu-text">Slack</span></span></a>        </li>        <li>            <a href="https://www.ace.toyo.ac.jp/ct/home" target="_blank"><span><span class="sidebar-menu-text">ToyoNet-ACE</span></span></a>        </li><li>            <a href="https://ini-connect.net/" target="_blank"><span><span class="sidebar-menu-text">INI-connect</span></span></a>        </li>    </ul></li>'
    $(".sidebar-menu").append(inserthtml);

    const mymemo = '<li>    <a id="mynote">        <i class="fas fa-sticky-note"></i>        <span>            <span class="sidevar-menu-text">このページのメモ</span>        </span>    </a></li>';
    $(".sidebar-menu").append(mymemo);

    const mymemolists = '<li>    <a href="https://moocs.iniad.org/courses?memolists">        <i class="fas fa-list"></i>        <span>            <span class="sidevar-menu-text">メモを保存したページ一覧</span>        </span>    </a></li>';
    $(".sidebar-menu").append(mymemolists);
});