//A)

type postObject ={
    autor:string,
    texto:string
}

const arrayPost:postObject[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  console.table(arrayPost)

  function buscarPostsPorAutor(posts:postObject[], autorInformado:string):any {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  console.table(buscarPostsPorAutor(arrayPost, "Lord Voldemort"))