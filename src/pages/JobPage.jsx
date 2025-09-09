import {useState, useEffect, use} from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async() => {
            try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error('Error fetching data:', error, data);
      } finally {
        setLoading(false);
        
      }
    }
    fetchJob()
    }, []);
  return loading ? <Spinner /> :(
    <div>
      {job.title}
    </div>
  )
}



export default JobPage
