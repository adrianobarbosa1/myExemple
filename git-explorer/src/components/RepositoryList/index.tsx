import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";
import { Container } from "./style";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/adrianobarbosa1/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <Container>
            <section className="repository-list">
                <h1>Lista de repositorios</h1>
                <ul>
                    {repositories.map(item => <RepositoryItem key={item.name} repository={item} />)}
                </ul>
            </section>
        </Container>
    )
}