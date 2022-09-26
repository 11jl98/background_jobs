import queue  from '../util/config/databaseRedis'

class QueueSicca {

  public async Queue({ data }: any) {
    try {
      await queue.add(data)
      
    } catch (error) {
      console.log(error)
    }
  }
}

export default new QueueSicca()