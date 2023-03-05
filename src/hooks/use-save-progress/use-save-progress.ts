import { useEffect } from 'react';
import useStateContext from '../../state/context/state/use-state-context';
import storage from '../../utils/storage/storage';

const useSaveProgress = () => {
  const { attempts, drawSpeed, results } = useStateContext();

  useEffect(() => storage.set('attempts', attempts), [attempts]);

  useEffect(() => storage.set('draw-speed', drawSpeed), [drawSpeed]);

  useEffect(() => storage.set('results', results), [results]);
};

export default useSaveProgress;
