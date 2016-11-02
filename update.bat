SET HTTP_PROXY=http://127.0.0.1:8787
SET HTTPS_PROXY=http://127.0.0.1:8787
:loop
meteor update
@goto :loop