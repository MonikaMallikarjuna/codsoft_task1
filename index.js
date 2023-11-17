var text = new Typed(".text", {
    strings: [ "Web Developer","Frontend Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    var downloadButton = document.getElementById('resume');

    // Add click event listener to the button
    downloadButton.addEventListener('click', function () {
       
        var resumeFilePath = 'https://publuu.com/flip-book/299539/695379';

       
        var downloadLink = document.createElement('a');
 
        downloadLink.href = resumeFilePath;

        
        downloadLink.download = 'MonikaResume.pdf';

        
        document.body.appendChild(downloadLink);

       
        downloadLink.click();

        document.body.removeChild(downloadLink);
    });
});