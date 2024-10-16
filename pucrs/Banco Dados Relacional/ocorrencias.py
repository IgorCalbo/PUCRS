import sqlalchemy as sa

engine = sa.create_engine("sqlite:///BD//ocorrencias.db")

import sqlalchemy.orm as orm

base = orm.declarative_base()

# Tabela DP
class dp(base):
    __tablename__ = "tbDP"

    codDP = sa.Column(sa.INTEGER, primary_key= True, index= True)
    nome = sa.Column(sa.VARCHAR(100), nullable= False)
    endereco = sa.Column(sa.VARCHAR(255), nullable= False)

# Tabela responsavelDP
class responsavelDP(base):
    __tablename__ = "tbResponsavelDP"

    codDP = sa.Column(sa.INTEGER, primary_key= True, index= True)
    delegado = sa.Column(sa.VARCHAR(100), nullable= False)

# Tabela Municipio
class municipio(base):
    __tablename__ = "tbMunicipio"

    codIBGE = sa.Column(sa.INTEGER, primary_key= True, index= True)
    municipio = sa.Column(sa.VARCHAR(100), nullable= False)
    regiao = sa.Column(sa.VARCHAR(25), nullable= False)

# Tabela Ocorrencias
class ocorrencias(base):
    __tablename__ = "tbOcorrencias"

    idRegistro = sa.Column(sa.INTEGER, primary_key= True, index= True)
    codDp = sa.Column(sa.INTEGER, sa.ForeignKey('tbDP.codDP', ondelete="NO ACTION", onupdate="CASCADE"), index=True)
    codIBGE = sa.Column(sa.INTEGER, sa.ForeignKey('tbMunicipio.codIBGE', ondelete="NO ACTION", onupdate="CASCADE"), index=True)
    ano = sa.Column(sa.CHAR(4), nullable= False)
    mes = sa.Column(sa.CHAR(2), nullable= False)
    ocorrencia = sa.Column(sa.VARCHAR(100), nullable= False)
    qtde = sa.Column(sa.INTEGER, nullable= False)

try:
    base.metadata.create_all(engine)
    print('Tabelas criadas!')
except ValueError:
    ValueError()