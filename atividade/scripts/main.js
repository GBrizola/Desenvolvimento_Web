function atualizar_output(){

    const html_code = document.querySelector('#html_input').value;
    const css_code = document.querySelector('#css_input').value;
    const js_code = document.querySelector('#js_input').value;
    const output = document.querySelector('#resultado_output');

    output.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    output.appendChild(iframe);

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>${css_code}</style>
    </head>
    <body>
        ${html_code}
        <script>${js_code}</script>
    </body>
    </html>`);
    doc.close();
}

document.querySelector('#html_input').addEventListener('input', atualizar_output);
document.querySelector('#css_input').addEventListener('input', atualizar_output);
document.querySelector('#js_input').addEventListener('input', atualizar_output);