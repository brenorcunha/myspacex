import appDataSource from '../server';

const main = async () =>{
    console.time('main')
    await appDataSource.initialize()
  }

main().then(()=>{
  console.log("Kinnectd 2 da DB")
})

main().catch(err => {
  console.error(err)
  process.exit()
})
