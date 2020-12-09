const context =  {
  projects: [
    {
      title: 'Hop',
      subtitle: 'A terminal based file browser for Windows and Unix',
      link: 'https://github.com/benrrutter/hop',
      description: `I use the terminal a lot in my workflow. Projects like Ranger and nnn are a huge help when working on Unix systems, but I\'m often required to use Windows. It bugged me that there wasn\'t an equivalent software, let alone one that offered cross-compatibility. So I built Hop, a Windows/Unix compatible file browser written in Python.`
    },
    {
      title: 'House of Left',
      subtitle: 'Code based artworks.',
      link: 'https://instagram.com/houseofleft',
      description: 'An exploration of the point where code and art intersect, House Of Left is an instagram-based project of artworks built using either Python or Processing (a Java framework designed for animations and visuals). Most of my stuff involves simple geometric patterns and colour rules.'
    },
    {
      title: 'Shades',
      subtitle: 'A Python module for 2D generative image creation',
      link: 'https://github.com/benrrutter/shades',
      description: 'Shades is a module for geometric image creation that expands on Python\'s Pillow and OpenSimplex packages. It\'s built on a paradigm of reusable Shade objects to help create generative 2D images. It simplifies production of generative images, and features an easily hackable abstract base class for expanding upon the code base whenever needed.'
    },
    {
      title: 'Demotivational Pong',
      subtitle: 'A game that is far too hard.',
      link: 'https://github.com/benrrutter/misc_code/blob/master/demotivational_pong.py',
      description: 'This started as a project to see the smallest runnable game I could make in Python. Demotivational Pong is a version of pong written in less that 100 lines of script using Python\'s Pygame module. As you can guess from the name, it\'s very difficult.'
    }
  ]
};

const source = document.getElementById('projectTemp').innerHTML;
const template = Handlebars.compile(source);
const compiledHtml = template(context);
const displayProjects = document.getElementById('projects');
displayProjects.innerHTML = compiledHtml;
