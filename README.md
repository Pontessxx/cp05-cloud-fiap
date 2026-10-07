# CP05 Cloud — Pipeline de Segurança

Site estático (Nginx em Docker) com pipeline `security.yml` no GitHub Actions: Gitleaks, Semgrep e Trivy.

## Estrutura

```
Dockerfile
index.html
.github/workflows/security.yml
provas/
  prova1-segredo-falso.txt
  prova2-vulneravel.js
```

## Como gerar as provas

1. Suba o repositório (sem a pasta `provas/`) e confirme que as 3 jobs ficam verdes.
2. **Prova 1 (Gitleaks barra):** crie uma branch, copie `provas/prova1-segredo-falso.txt` para a raiz como `config.txt`, faça commit e push. A job `gitleaks` deve falhar. Tire print.
3. **Prova 2 (Semgrep aponta):** copie `provas/prova2-vulneravel.js` para a raiz como `app.js`, commit e push. A job `semgrep` deve falhar apontando o `eval`. Tire print.
4. **Prova 3 (Trivy):** tire print do log da job `trivy` e escreva a análise do resultado.
5. Monte o PDF com os prints e um parágrafo por barreira.

Obs.: o segredo da prova 1 é falso, só serve para o Gitleaks reconhecer o formato.
