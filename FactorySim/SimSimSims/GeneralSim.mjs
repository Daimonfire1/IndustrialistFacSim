

export async function GeneralSimRunner(DataImport, LineReader) {

    console.clear()
    console.log("Reroute to G-Sim module complete, Aloha o/")
    console.log("Which machine should be the focus of this simulation?")
    console.log("Simply search for a name")

    const answer = await LineReader.question("Simply search for a name")

    DataImport.find
    
}