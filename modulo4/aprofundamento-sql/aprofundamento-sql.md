CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

select * from Actor; 


-- Exercicío 1

-- A) vai apagar a coluna salary

-- B) mudou o nome da coluna gender para sex(6)

-- C) agora ele alterou genero para genero(255)

-- D)

	alter table Actor change gender gender varchar(100); 
    

-- Exercício 2

-- A) 

	update Actor
    set name = "jane willias",
    birth_date = "1980-07-27"
    where id = "003";
    

-- B)  

	select upper(name) from Actor
    where name = "juliana paes";
    
    select lower(name) from Actor
    where name = "juliana paes";
    
    
-- C) 

	update Actor 
    set name = "yasmin",
    salary = "1000000",
    birth_date = "2002-11-29",
    gender = "female"
    where id = "005";
    

-- D) Atualizou como concluído mas n mudou as informações de ninguem

	update Actor 
    set name = "anyone",
    salary = "1000000",
    birth_date = "2002-11-29",
    gender = "female"
    where id = "0010";
    
    
-- Exercício 3

-- A)

	delete from Actor
    where name = "Fernanda Montenegro";


-- B) 

		delete from Actor 
        where gender = "male" and 
        salary > "100000000" ;
 
 
 -- Exercício 4
 
 -- A)
 
	select max(salary) from Actor;
 

-- B) 
	
	select min(salary) from Actor
	where gender = "female";
    
    
 -- C)   
	
    select count(*) from Actor 
    where gender = "female";

	
-- D) 

	select sum(salary) from Actor;
    
    
-- Exercício 5

-- A) ele agrupou os elementos da tabela pelo gênero

-- B) 

	select id , name from Actor 
    where gender = "male" 
    order by name desc;
    
    
-- C)

	select * from Actor order by salary;
    

-- D) 

	select * from Actor order by salary desc
	limit 3;
    

-- E)

	select avg(salary), gender from Actor
    group by gender;
    
    
-- Exercício 6

-- A)

	alter table filmes add playing_limit_date date;
    
-- B)

	alter table filmes change rating rating float;
    
-- C)

	update filmes 
    set playing_limit_date = "2020-12-31"
	where id = "001";
    
    
 -- D)
 
	delete from movie where id = "001";
	
	