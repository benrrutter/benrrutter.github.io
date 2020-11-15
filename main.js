const context = {
  projects: [
    {
      title: 'Hop: a terminal based file browser for Windows and Unix',
      link: 'https://github.com/benrrutter/hop',
      description: 'I use the terminal a lot in my workflow. Projects like Ranger and nnn are a huge help when working on Unix systems, but I\'m often required to use Windows. It bugged me that there wasn\'t an equivalent software, let alone one that offered cross-compatibility. So I built Hop, a Windows/Unix compatible file browser written in Python.'
    },
    {
      title: 'House of Left: code based artworks',
      link: 'https://instagram.com/houseofleft',
      description: 'An exploration of the point where code and art intersect, House Of Left is an instagram-based project of artworks built using either Python or Processing (a Java framework designed for animations and visuals).'
    },
    {
      title: 'Sketcher: a Python module for 2D generative image creation',
      link: 'https://github.com/benrrutter/generative_python_scripts/blob/master/visuals/sketcher.py',
      description: 'Sketcher is a module for geometric image creation that expands on Python\'s Pillow and OpenSimplex packages. It\'s built on a paradigm of reusable simplex based shader objects to help create generative 2D images.'
    },
    {
      title: 'Demotivational Pong: a game that is far too hard.',
      link: 'https://github.com/benrrutter/misc_code/blob/master/demotivational_pong.py',
      description: 'Demotivational Pong is a version of pong written in less that 100 lines of script using Python and Pygame.'
    }
  ]
}

const source = document.getElementById('projectTemp').innerHTML;
const template = Handlebars.compile(source);
const compiledHtml = template(context);
const displayProjects = document.getElementById('projects');
displayProjects.innerHTML = compiledHtml;

var collapsibleTitles = document.getElementsByClassName("collapsibleTitle");

for (let i = 0; i < collapsibleTitles.length; i++) {
  let element = collapsibleTitles[i];
  element.addEventListener("click", () => {
    let collapsibleContent = element.nextElementSibling;
    if (collapsibleContent.style.maxHeight) {
      collapsibleContent.style.maxHeight = null;
    } else {
      collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
    }
  });
}
