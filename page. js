'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    getTasks()
  }, [])

  async function getTasks() {
    const { data } = await supabase.from('tasks').select('*').order('created_at', { ascending: false })
    setTasks(data || [])
  }

  async function addTask(e) {
    e.preventDefault()
    if (!title) return
    await supabase.from('tasks').insert({ title })
    setTitle('')
    getTasks()
  }

  return (
    <main style={{padding: 20, maxWidth: 600, margin: '0 auto'}}>
      <h1>FastRand</h1>
      <form onSubmit={addTask}>
        <input 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          placeholder="Add a task"
          style={{padding: 10, width: '70%', marginRight: 10}}
        />
        <button type="submit" style={{padding: 10}}>Add</button>
      </form>
      <ul>
        {tasks.map(task => <li key={task.id}>{task.title}</li>)}
      </ul>
    </main>
  )
}