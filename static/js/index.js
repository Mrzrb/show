document.addEventListener('DOMContentLoaded', function () {
    init()
    setTimeout(() => {
        var imgs = document.getElementsByTagName("img")
        for(i=0; i< imgs.length; i++){
            imgs[i].onclick = (item) => {
                showImage(item.target.src)
            }
        }
    }, 1000)
})

function showImage(src) {
    var gallery = [{
        title: "image",
        description: "image",
        src: src
    }];
    Spotlight.show(gallery, {
        index: 1,
        theme: "black",
        autohide: false,
        control: ["autofit", "zoom"]
    });
}

function init() {
    Reveal.initialize({
        plugins: [ RevealMarkdown, RevealHighlight, RevealSearch, RevealNotes ],
        slideNumber: true,
        center: false,
        hash: true,
        markdown: {
            smartypants: true
        }
    });
    var modalTinyNoFooter = new tingle.modal({
        onClose: function() {
            console.log('close');
        },
        onOpen: function() {
            console.log('open');
        },
        beforeOpen: function() {
            console.log('before open');
        },
        beforeClose: function() {
            console.log('before close');
            return true;
        },
        cssClass: ['class1', 'class2']
    });

    const actionList = {
        broadcast: (v) => {
            Notiflix.Notify.Success(`${v.data.name}提问了: ${v.data.question}`);
        },
        show: (v) => {
            modalTinyNoFooter.setContent(`${v.data.name}的问题: ${v.data.question}`)
            modalTinyNoFooter.open()
        },
        p_left: (v) => {
            Reveal.left()
        },
        p_right: (v) => {
            Reveal.right()
        },
        p_up: (v) => {
            Reveal.up()
        },
        p_down: (v) => {
            Reveal.down()
        },
        refresh: (v) => {
            window.location.reload()
        }
    };
    const handleBlobData = async (b) => {
        if (b.text) {
            return await b
                .text()
                .then((v) => {
                    return JSON.parse(v);
                })
                .catch((r) => {
                    console.warn(r);
                });
        }
    };
    const ws = new WebSocket("ws://127.0.0.1:8081");
    ws.onmessage = async (evt) => {
        const data= evt.data;
        const d = await handleBlobData(data);
        if (!d) {
            return;
        }
        const fn = actionList[d.action];
        fn && fn(d);
    };

}
