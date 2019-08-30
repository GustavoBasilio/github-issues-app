import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import {
  Container,
  Filters,
  Select,
  Label,
  List,
  Loading,
} from './styles';
import Issue from '../../components/Issue';

// Component for the List of Issues
const Issues = ({ navigation }) => {

  const [state, setState] = useState(null);
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  /**
   * Fetch the issues and update the hook
   *
   * @param {number} [pageNumber=page]
   * @param {boolean} [shouldRefresh=false]
   */
  async function loadIssues(pageNumber = page, shouldRefresh = false) {

    try {

      setLoading(true);
      const name = navigation.getParam('name');
      const owner = navigation.getParam('owner');

      // Fetch the data
      const result = await api.get(`/repos/${owner}/${name}/issues?page=${pageNumber}&${state !== null ? `state=${state}` : ''}`);

      // Map the result leaving only the necessary data
      const mappedResult = result.data.map((item) => ({
        id: item.id,
        url: item.html_url,
        title: item.title,
        user: item.user.login,
        avatar: item.user.avatar_url,
      }));

      // Check if should refresh and update the hook
      setIssues(shouldRefresh ? mappedResult : [...issues, ...mappedResult]);
      setPage(pageNumber);
      setLoading(false);


    } catch (err) {

      setLoading(false);
      console.log(err);

    }


  }

  /**
   * Update the issue state to trigger the issues to load
   *
   * @param {String|Null} value
   */
  function changeIssueState(value) {

    setIssues([]);
    setPage(1);
    setState(value);

  }

  // Update the Issues when the issue state changes
  useEffect(() => {
    loadIssues();
  }, [state]);


  /**
   * Refresh the list when the list is pull down
   *
   */
  async function refreshList() {

    setRefresh(true);
    await loadIssues(1, true);
    setRefresh(false);


  }

  return (
    <Container>

      <Filters>
        <Select onPress={() => changeIssueState(null)}>
          <Label current={state === null}>Todas</Label>
        </Select>
        <Select onPress={() => changeIssueState('open')}>
          <Label current={state === 'open'}>Abertas</Label>
        </Select>
        <Select onPress={() => changeIssueState('closed')}>
          <Label current={state === 'closed'}>Fechadas</Label>
        </Select>
      </Filters>

      <List
        data={issues}
        onEndReached={() => !loading && loadIssues(page + 1)}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refresh}
        keyExtractor={(item) => String(item.id)}
        ListFooterComponent={loading && <Loading />}
        renderItem={({ item }) => (
          <Issue data={item} />
        )}
      />
    </Container>
  );

};

// Add the repository name to the title of the Header
Issues.navigationOptions = (({ navigation }) => ({ title: navigation.getParam('name') }));

export default Issues;
