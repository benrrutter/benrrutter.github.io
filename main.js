const context =  {
  projects: [
    {
      title: 'Genre and Lyrics',
      subtitle: 'Can a Naive Bayes model predict song genre based on lyrics alone?',
      link: 'https://github.com/benrutter/can-you-tell-genre-from-lyrics',
      description: 'After I heard about the million-song-dataset, I decided to set out to acheive the difficult and slightly pointless task of attempting to build a model that could predict genre based only on the words used in lyrics. I also took a look at some of what seperates different genres. It went ok-ish, and I wrote about it in the readme.'
    },
    {
      title: 'Hop',
      subtitle: 'A terminal based file browser for Windows and Unix',
      link: 'https://github.com/benrutter/hop',
      description: `I use the terminal a lot in my workflow. Projects like Ranger and nnn are a huge help when working on Unix systems, but I\'m often required to use Windows. It bugged me that there wasn\'t an equivalent software, let alone one that offered cross-compatibility. So I built Hop, a Windows/Unix compatible file browser written in Python.`
    },
    {
      title: 'House of Left',
      subtitle: 'Code based artworks.',
      link: 'https://instagram.com/houseofleft',
      description: 'An exploration of the point where code and art intersect, House Of Left is an instagram-based project of artworks built using either Python or Processing (a Java framework designed for animations and visuals). Most of my stuff involves simple geometric patterns and colour rules.'
    },
    {
      title: 'Data Science Projects',
      subtitle: 'A collection of predictive models.',
      link: 'https://github.com/benrutter/data-science-projects',
      description: 'A collection of data-science related projects, most of which are predictive models, and some are written as part of online courses. They include a connect-4 playing AI, text analysis of a book, titanic survival predictions and some handwriting recognition.'
    },
    {
      title: 'Fortune Cookie API',
      subtitle: 'A Mongodb and Express based api',
      link: 'https://github.com/benrutter/fortune-cookie-api',
      description: 'I use a lot of SQL and Python in my day to day work. I wanted to built up more experience around other tools like MongoDB and Node, so wrote a simple api that runs from your localhost, and returns a random fortune from a MongoDB collection'
    },
    {
      title: 'Shades',
      subtitle: 'A Python module for 2D generative image creation',
      link: 'https://github.com/benrutter/shades',
      description: 'Shades is a module for geometric image creation that expands on Python\'s Pillow and OpenSimplex packages. It\'s built on a paradigm of reusable Shade objects to help create generative 2D images. It simplifies production of generative images, and features an easily hackable abstract base class for expanding upon the code base whenever needed.'
    },
    {
      title: 'Demotivational Pong',
      subtitle: 'A game that is far too hard.',
      link: 'https://github.com/benrutter/misc_code/blob/master/demotivational_pong.py',
      description: 'This started as a project to see the smallest runnable game I could make in Python. Demotivational Pong is a version of pong written in less that 100 lines of script using Python\'s Pygame module. As you can guess from the name, it\'s very difficult.'
    }
  ]
};

const source = document.getElementById('projectTemp').innerHTML;
const template = Handlebars.compile(source);
const compiledHtml = template(context);
const displayProjects = document.getElementById('projects');
displayProjects.innerHTML = compiledHtml;
