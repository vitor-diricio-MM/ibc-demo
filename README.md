### IBC Demo

To run locally on a public url, run

```bash
python3 -m http.server 8080
```

```bash
ngrok http 8080
```

Para hostear um site na aws:

1. Crie um bucket na aws (neste caso criei um chamado 'ibc-pam-demo')

2. Dentro da pasta do seu projeto crie um arquivo policy.json

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::ibc-pam-demo/*"
    }
  ]
}
```

3. Mande os arquivos pro bucket com

```bash
aws s3 cp . s3://ibc-pam-demo/ --recursive
```

4. Configure o site para ser servico

```bash
aws s3 website s3://ibc-pam-demo/ --index-document index.html
```

5. Aplique as políticas no bucket

```bash
aws s3api put-bucket-policy --bucket ibc-pam-demo --policy file://policy.json
```

6. O site vai estar disponível na url

http://ibc-pam-demo.s3-website-<região>.amazonaws.com
