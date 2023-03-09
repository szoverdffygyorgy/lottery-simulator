import { useEffect } from 'react';
import useStateContext from '../../state/context/state/use-state-context';
import storage from '../../utils/storage/storage';

const useSaveProgress = () => {
  const { attempts, drawSpeed, results } = useStateContext();

  useEffect(() => storage.set('react-attempts', attempts), [attempts]);

  useEffect(() => storage.set('react-draw-speed', drawSpeed), [drawSpeed]);

  useEffect(() => storage.set('react-results', results), [results]);
};

export default useSaveProgress;
