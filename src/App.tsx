//#region Import
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import './App.css';
import { Layout } from './components/shared';
import { TaskResponse } from './types';
import { Filter, List, Search } from './components';
import { FILTER_OPTIONS } from './constant';
import { useFetch } from './hooks/useFetch';
import ErrorMessage from './components/error/error';
//#endregion

function App() {
  //#region STATE
  const { data: tasks, loading, error, refetch } = useFetch<Array<TaskResponse>>({
    url: 'https://jsonplaceholder.typicode.com/todos',
  });
  const [filteredTasks, setFilteredTasks] = useState<Array<TaskResponse>>([]);
  const [filterType, setFilterType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  //#endregion

  //#region METHODS
  useEffect(() => {
    if (tasks) {
      applyFilters(tasks);
    }
  }, [tasks, filterType, searchTerm]);

  const applyFilters = (taskList: Array<TaskResponse>) => {
    let filtered = [...taskList];

    // Apply filter type first
    if (filterType === 'Complete') {
      filtered = filtered.filter((task) => task.completed);
    } else if (filterType === 'Pending') {
      filtered = filtered.filter((task) => !task.completed);
    }

    // Apply search term filter
    if (searchTerm.trim()) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTasks(filtered);
  };

  const handleFilterTask = (event: SyntheticEvent) => {
    const value = (event.target as HTMLSelectElement).value;
    setFilterType(value);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  //#endregion

  //#region RETURN
  return (
    <Layout>
    {loading && <span>Loading...</span>}
    {error && (
      <ErrorMessage message={error} onRetry={refetch} />
    )}
    {!loading && !error && (
      <>
        <Search onChange={handleSearch} value={searchTerm} name="search" placeholder="Search here..." />
        <Filter optionsData={FILTER_OPTIONS} onChange={handleFilterTask} />
        <List items={filteredTasks} />
      </>
    )}
  </Layout>
  );
}
//#endregion

export default App;
