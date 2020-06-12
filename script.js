const sheetUrl = 'https://docs.google.com/spreadsheets/d/1Z0cc1gI7PGcS9TiN5cPKpV9mt6jaAtz0XWf1uTBCz7g/edit?usp=sharing'

const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/1Z0cc1gI7PGcS9TiN5cPKpV9mt6jaAtz0XWf1uTBCz7g/od6/public/values?alt=json'

$.ajax({
    url: sheetAsJSON,
}).then( data => {
    console.log('data', data)
    const projects = data.feed.entry.map(project => {
        return {
            title: project.gsx$title.$t,
            image: project.gsx$image.$t,
            description: project.gsx$description.$t,
            url: project.gsx$url.$t
        }
    }) 
    app(projects)
})

.catch( err => console.log('err', err))

function app(projectsArr) {
    console.log("app - projectsArr", projectsArr);
    projectsArr.forEach(project => {
        
        let $container = $('<div>').addClass('containers')
        
        $('#schoolProjects').append($container) 

        let $title = $('<h6>').addClass('card_title')
        
        $title.text(project.title)
        
        $container.append($title)

        let $image = $('<img>').attr('src', project.image).addClass('card_image')
 
        $container.append($image)

        let $description = $('<p>').addClass('card_description')

        $description.text(project.description)

        $container.append($description)

        let $url = $('<a>').addClass('card_A-tag')

        $url.text('click here')

        $url.attr('href', project.url)

        $container.append($url)
    })
   }