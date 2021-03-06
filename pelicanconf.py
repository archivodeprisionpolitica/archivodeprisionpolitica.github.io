#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'archivodeprisionpolitica'
SITENAME = 'presxsdelarevuelta'
SITEURL = 'https://archivodeprisionpolitica.io'
THEME = './theme'

PATH = 'content'

TIMEZONE = 'US/Eastern'

DEFAULT_LANG = 'es'

DISPLAY_CATEGORIES_ON_MENU = False
DISPLAY_PAGES_ON_MENU = False
MENUITEMS = (
    ('Inicio', 'index.html'),
    ('Testimonios', 'testimonios.html'),
    ('Reflexiones', 'reflexiones.html'),
    ('Editorial', 'editorial.html'),
    ('Equipo', 'equipo.html'),
    ('Contacto', 'contacto.html'),
)

PAGE_SAVE_AS = '{slug}.html'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

PAGE_PATHS = [
    'pages',
]

ARTICLE_PATHS = [
    'testimonios',
    'reflexiones'
]

# based on https://stackoverflow.com/questions/31270373/how-to-add-a-favicon-to-a-pelican-blog
STATIC_PATHS = [
    'images',
    'extra',
    'assets',
]

# based on https://stackoverflow.com/questions/31270373/how-to-add-a-favicon-to-a-pelican-blog
EXTRA_PATH_METADATA = {
    'extra/sketch.js': {'path': 'sketch.js'},
    'extra/favicon.ico': {'path': 'favicon.ico'},  # and this
    'extra/CNAME': {'path': 'CNAME'},
    'extra/LICENSE': {'path': 'LICENSE'},
    'extra/README': {'path': 'README'},
}

CACHE_CONTENT = False
LOAD_CONTENT_CACHE = False
