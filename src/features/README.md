# Feature-Based Architecture

Este projeto utiliza **Arquitetura Baseada em Funcionalidades** (Feature-Based Architecture) para organizar o código de forma mais modular e escalável.

## Estrutura

```
src/
├── features/               # Funcionalidades principais
│   ├── auth/              # Autenticação e autorização
│   │   ├── components/    # Componentes específicos de auth
│   │   ├── pages/         # Páginas de login, registro, etc.
│   │   ├── hooks/         # Hooks relacionados à auth
│   │   └── index.js       # Barrel exports
│   ├── dashboard/         # Dashboard e páginas administrativas
│   ├── politicos/         # Funcionalidade de políticos
│   ├── fiscalizacao/      # Sistema de fiscalização
│   ├── tinder/            # Sistema de match de candidatos
│   ├── perfil/            # Perfil do usuário
│   └── index.js           # Exports centralizados
├── shared/                # Componentes compartilhados
├── contexts/              # Contextos globais
├── hooks/                 # Hooks globais
├── services/              # Serviços e APIs
├── config/                # Configurações
└── utils/                 # Utilitários globais
```

## Benefícios

1. **Modularidade**: Cada feature é independente
2. **Escalabilidade**: Fácil adicionar novas features
3. **Manutenibilidade**: Código relacionado fica junto
4. **Reutilização**: Barrel exports facilitam imports
5. **Colaboração**: Times podem trabalhar em features diferentes

## Como usar

### Importar de uma feature específica:
```javascript
import { LoginPage, GoogleOfficialLogin } from '../features/auth';
```

### Importar de todas as features:
```javascript
import { LoginPage, Dashboard, PoliticosPage } from '../features';
```

## Convenções

- Cada feature tem sua própria pasta com `components/`, `pages/`, `hooks/`, etc.
- Arquivo `index.js` em cada feature exporta os componentes principais
- Componentes compartilhados ficam em `shared/`
- Contextos e services globais ficam nas pastas raiz